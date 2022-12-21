# Round two – Esoteric functions

1.  What is the output of this block of code?

    ```js
    console.log("A");

    (async () => {
      await Promise.all([
        setTimeout(() => console.log("C"), 0),
        (async () => console.log(await Promise.resolve("D")))(),
      ]);

      console.log("B");

      setTimeout(console.log("E"), 0);
    })();
    ```

2.  What is the output of this block of code?

    ```js
    console.log(1 + +"3" + "3");
    console.log(1 + "3" + "3");
    console.log(1 + -"1" + "3");
    console.log(+"1" + "1" + "3");
    console.log("X" - "Y" + "3");
    console.log("X" - "Y" + 3);
    ```

3.  What is the output of this block of code?

    ```js
    const x = 1227;

    const y = x.toString().split("");
    console.log(y.slice(1, 3));
    ```

4.  What is the output of this block of code?

    ```js
    const l = "aetyawcanyrspearrpedrmsmyinhh";
    const output = [
      [l[23], l[1], l[10], l[20], l[9]].join(""),
      [l[6], l[27], l[16], l[25], l[22], l[2], l[21], l[14], l[11]].join(""),
      [l[4], l[26], l[19]].join(""),
      l[7],
      [l[28], l[0], l[17], l[12], l[3]].join(""),
      [l[8], l[18], l[5]].join(""),
      [l[24], l[13], l[14], l[15]].join(""),
    ].join(" ");

    console.log(output);
    ```

5.  What is the output of this block of code?

    ```js
    let x = "6";
    console.log(x++ + 3, x);
    ```
