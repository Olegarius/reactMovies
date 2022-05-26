export const getDuration = (time: number) => {
    if (!time) {
        return "";
    }
    const min = 60;
    const hours = 'h';
    const minutes = 'min';
    const fullHours = Math.trunc(time / min);
    const fullMinutes = time % min;

    return `${fullHours}${hours} ${fullMinutes}${minutes}`;
};

export const setDuration = (time: string) => {
    if (!time) {
        return 0;
    }
    const min = 60;
    const hours = 'h';
    const minutes = 'min';
    const splitTime = time.split(" ");
    const fullHours = parseInt(splitTime[0]);
    const fullMinutes = parseInt(splitTime[1]);

    return fullHours * 60 + fullMinutes;
};

export const formatDate = (date?: Date | null) => {
    if (!date) {
        return "";
    }
    const year = date.getFullYear();
    let month: number | string = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day: number | string = date.getDate();
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
};

type TSettings = {
    name?: string;
    age?: number;
};
type TUser =  {
    settings?: TSettings;
};
type TOptions = {
    user?: TUser;
};

export const optionalChainingForTest = (options?: TOptions) => {
    return options?.user?.settings?.name || options?.user?.settings?.age || "";
};