"use strict"

window.addEventListener('DOMContentLoaded', () => {
  // ここにしーーんを作るスクリプトを記述
    // canvasの定義
    const canvas = document.getElementById('renderCanvas')
    // 3D engineのロード
    const engine = new BABYLON.Engine(canvas, true)

    const createScene = () => {
        // sceneオブジェクト生成
        const scene = new BABYLON.Scene(engine)
        // カメラの作成とポジションの設定
        const camera = new BABYLON.FreeCamera(
            "camera",
            new BABYLON.Vector3(0, 5, -10),
            scene
        )

        // カメラの初期方向（target）の座標を設定
        camera.setTarget(BABYLON.Vector3.Zero())

        // attachControlを設定
        // これを設定することでマウスをグリグリ視点移動ができる
        camera.attachControl(canvas, false)

        // ライトの作成
        const light = new BABYLON.HemisphericLight(
            "light1",
            new BABYLON.Vector3(0, 1, 0),
            scene
        )

        // 球のオブジェクト作成
        const sphere = BABYLON.MeshBuilder.CreateSphere(
            "sphere",
            {segments: 16, diameter: 2},
            scene
        )

        // 球のY軸ポジション設定
        sphere.position.y = 1

        // 地面のオブジェクト作成
        const ground = BABYLON.MeshBuilder.CreateGround(
            "ground1",
            {height: 6, width: 6, subdivisions: 2},
            scene
        )

        return scene
    }

    const scene = createScene();
    engine.runRenderLoop(function () {
        scene.render();
    });    
    window.addEventListener("resize", function () {
        engine.resize();
    });
})