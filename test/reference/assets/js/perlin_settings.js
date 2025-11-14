    let stageW = 0; // canvas の横幅を格納する変数
    let stageH = 0; // canvas の縦幅を格納する変数
    console.log(stageW, stageH); // この時点では、0, 0 で表示される

    const canvas = document.querySelector("canvas"); // canvas要素の参照を取得
    const context = canvas.getContext("2d"); // 2Dの描画命令群を取得

    noise.seed(Math.random());

    // 初期化
    tick(); // アニメーションを開始
    resize(); // キャンバスサイズを設定
    window.addEventListener("resize", resize); // ウィンドウサイズ変更時にキャンバスをリサイズさせるための関数

    function tick() { // アニメーションをフレームごとに更新する
      requestAnimationFrame(tick);
      const time = Date.now() / 4000;
      draw(time); // 描画関数を呼び出す
    }

    function draw(time){ // 描画
      context.clearRect(0, 0, stageW, stageH); // キャンバス全体をクリア
      context.lineWidth = 1; // 線の太さ

      const amplitude = stageH / 2 // 線の振り幅（波の高さ）
      const lineNum = 100; // ラインの数
      const segmentNum = 150; // 線の分割数

      // console.log(amplitude);
      // console.log(time);

      [...Array(lineNum).keys()].forEach((j) => { // j: 0〜149までを繰り返す
        const coefficient = 50 + j;
        // console.log(j, coefficient);

        context.beginPath(); // 線の開始
        // context.strokeStyle = "white"; // 線の色

        // const h = Math.round((j / lineNum) * 360);
        // const s = 100;
        // const l = Math.round((j / lineNum) * 100);

        const r = 0;
        const g = 0;
        const b = 0;
        const alpha = 45;

        context.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;


      [...Array(segmentNum).keys()].forEach((i) => { // i: 0〜149までを繰り返す
        const x = (i / (segmentNum - 1)) * stageW; // x座標
        // console.log(i, x);

        const px = i / coefficient;
        const py = j / 50 + time;
        const y = amplitude * noise.perlin2(px, py) + stageH / 2; // y座標

        // 線の開始点と描画
        if (i === 0){
          context.moveTo(x, y); // iが0の時、始点を設定
        } else {
          context.lineTo(x, y); // iが0じゃない場合、始点を設定
        }
      });

        context.stroke(); // 線を描く
      });
    }

    function resize() { 
      // ウィンドウのサイズとデバイスピクセル比に基づいてキャンバスのサイズを更新
      stageW = innerWidth * devicePixelRatio; // デバイスピクセル比を考慮した横幅
      stageH = innerHeight * devicePixelRatio; // デバイスピクセル比を考慮した縦幅

      canvas.width = stageW; // キャンバスの幅を設定
      canvas.height = stageH; // キャンバスの高さを設定
      console.log(stageW, stageH); // 現在のキャンバスサイズを確認
    }