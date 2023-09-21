import { useState, useRef, useEffect } from "react";

export function useFollowPointer() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }) => {
      if (ref.current) {
        const element = ref.current;

        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        setPoint({ x, y });
      }
    };
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return { ref, point };
}
