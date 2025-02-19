//this hook nade to (insert, update, delete) in supabase -> used in client side components only.

import { createClient } from "@/supabase/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const supabase = createClient();

export function useClientMutate(
  table: string,
  action: "insert" | "update" | "delete"
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { id: number }) => {
      let response: any;

      if (action === "insert")
        response = await supabase.from(table).insert(payload);

      if (action === "update")
        response = await supabase
          .from(table)
          .update(payload)
          .match({ id: payload.id });

      if (action === "delete")
        response = await supabase
          .from(table)
          .delete()
          .match({ id: payload.id });

      if (response.error) throw response.error;
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [table], exact: false });
    },
    onMutate: async (newData: object) => {
      await queryClient.cancelQueries({ queryKey: [table] });
      const currentData = queryClient.getQueryData([table]);
      queryClient.setQueryData([table], (dataBeforeMutate: any) => [
        ...dataBeforeMutate,
        { id: Date.now(), ...newData },
      ]);

      return { currentData };
    },

    onError: (error, newData, context) => {
      queryClient.setQueryData([table], context?.currentData);
    },
  });
}
