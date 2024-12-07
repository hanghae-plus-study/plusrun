import { useQuery } from "@tanstack/react-query";
import supabase from "src/lib/supabase";

export const useSession = () => {
  const { data } = useQuery({
    queryKey: ["authSession"],
    queryFn: async () => {
      const { data: authInfo } = await supabase.auth.getSession();
      return !!authInfo.session; // 세션 존재 여부를 boolean으로 반환
    },
  });

  return { isLoggedIn: data ?? false };
};
