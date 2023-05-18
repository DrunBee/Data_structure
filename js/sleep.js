export function sleep(milesecond) {
    const promiseConstructorFirstParamter = (resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, milesecond);
    };
    return new Promise(promiseConstructorFirstParamter);
  }