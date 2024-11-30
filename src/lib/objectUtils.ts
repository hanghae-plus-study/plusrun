/**
 * 객체의 키를 타입 안전한 배열로 추출합니다.
 * @param obj - 키를 추출할 객체.
 * @returns 입력 객체의 키로 타입이 지정된 배열.
 * */
export const extractKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
