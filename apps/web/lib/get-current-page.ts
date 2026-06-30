import { navigation } from "@/constants/navigation";

export function getCurrentPage(pathname: string) {
  return (
    navigation.find((item) => item.href === pathname) ?? {
      title: "SmartHire AI",
      subtitle: "",
    }
  );
}
