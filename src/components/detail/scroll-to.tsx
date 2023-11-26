import { useRef, useEffect } from "react";

type IProps = React.PropsWithChildren<{ querySelector: string }>;

export default function ScrollTo({ querySelector, children }: IProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current.querySelector(querySelector);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [querySelector]);

  return (
    <div className="overflow-y-auto max-h-full" ref={ref}>
      {children}
    </div>
  );
}
