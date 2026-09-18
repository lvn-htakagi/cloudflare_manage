import { dayjs } from "dayjs";

export async function onRequest(context) {
  // サーバー側のターミナルにログが出力されます
  console.log("【バックエンドログ】/api/hello が呼び出されました！");
  console.log("リクエストURL:", context.request.url);

  return new Response(
    JSON.stringify({
      message: "Hello World from Backend! " + dayjs().format(),
    }),
    {
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    },
  );
}
