import React, { useState, useEffect } from "react";
import createTest from "../utils";
import { v4 as uuidv4 } from "uuid";
import styles from "./test.module.css";

export default function Test({ method }) {
  const [testResult, setTestResult] = useState(null);

  useEffect(() => {
    async function runTest() {
      const testResult = await createTest(method);
      // console.log(testResult);
      setTestResult(testResult);
    }
    runTest();
  }, []);
  return testResult == null ? (
    <div className={styles.main}>
      <div className={styles.imgLoading}>
        {[1, 2, 3, 4, 5].map(foo => (
          <div className={styles.imgLoadingItem} key={uuidv4()}></div>
        ))}
      </div>
    </div>
  ) : (
    <div className={styles.main}>
      <p>
        Running Test on Function =>{" "}
        {`${testResult.methodName} ${testResult.methodParamsNames}`}
      </p>
      <p>Function params: {JSON.stringify(testResult.arr)}</p>
      {testResult.raisedWarning ? <p>WARNING: {testResult.warning}</p> : <></>}
      <pre className={styles.testResult}>
        {JSON.stringify(testResult.result)}
      </pre>
    </div>
  );
}
