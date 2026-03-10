import { useState, useCallback } from 'react'

export type UseBoolean = Readonly<{
    value: boolean;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
    set: (value: boolean) => void;
}>

export default function useBoolean(initialValue: boolean = false): UseBoolean {
    const [value, setValue] = useState(initialValue);

    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);
    const toggle = useCallback(() => setValue(v => !v), []);

    return { value, setTrue, setFalse, toggle, set: setValue };
}