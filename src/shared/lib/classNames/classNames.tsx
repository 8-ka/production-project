type Mods = Record<string, boolean | string>

export const classNames = (classname: string, mods?: Mods, additional?: string[]): string => {
    return [
        classname,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}