import React, { useState, useEffect } from "react";
import createTest from "../utils";
import { v4 as uuidv4 } from "uuid";
import styles from "./test.module.css";

const maxLength = 800;

export default function Test({ method, params = false, rest = [] }) {
  const [testResult, setTestResult] = useState(null);
  const [parsedResponse, setParsedResponse] = useState(null);

  useEffect(() => {
    async function runTest() {
      const response = await createTest(method, params, ...rest);
      const stringResult = JSON.stringify(response.result);
      if (stringResult.length > maxLength) {
        setParsedResponse(stringResult.slice(0, maxLength) + "...}");
      } else {
        setParsedResponse(stringResult);
      }
      setTestResult(response);
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
        Running Test on Function ->{" "}
        {`${testResult.methodName} ${testResult.methodParamsNames}`}
      </p>
      <p>Function params: {JSON.stringify(testResult.arr)}</p>
      {testResult.raisedWarning ? <p>WARNING: {testResult.warning}</p> : <></>}
      <pre className={styles.testResult}>{parsedResponse}</pre>
    </div>
  );
}
