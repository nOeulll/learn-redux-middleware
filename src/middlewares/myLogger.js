const myLogger = store => next => action => {
  console.log(action); // console이 디스패치 될 때 출력
  console.log('\tPrev: ', store.getState());
  const result = next(action); //action을 미들웨어한테 전달하겠다(미들웨어가 없다면 리듀서한테 전달)
  console.log('\tNext: ', store.getState());
  return result;
};

export default myLogger;