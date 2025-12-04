import { useOnlineStatus } from "@/shared/hooks/useOnlineStatus";
import OfflineError from "@/shared/error/OfflineError";
import { Suspense } from "react";
import Loading from "@/shared/components/Loading";

export default function GuardedRoute({
  element,
  isPwa,
}: {
  element: TSX.Element;
  isPwa: boolean;
}) {
  const online = useOnlineStatus();

  if (!online && !isPwa) {
    return <OfflineError />;
  }

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
}
