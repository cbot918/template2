github oauth app localhost測試 快速模板

1. 進入github > settings > Developer settings > Oauth Apps
2. 右上角 [New OAuth App] 進去, 以下必填欄位

    2.1 Application name: 自己隨便填

    2.2 Homepage URL:  http://localhost:3002

    2.3 Authorization callback URL: http://localhost:3002/oauth/callback

3. 下方 Register application 後, 頁面有兩個ID要拿, Client ID, Client secrets, 複製起來

4. 前端程式碼

public/index.html
```js
<a href="https://github.com/login/oauth/authorize?client_id=xxxxx&scope=user">Login with GitHub</a>
// client_id=xxxxx, xxxxx 換成剛剛拿到的 Client ID
```
5. 後端程式碼

app.js 內, 填入拿到的 Client ID, Client secrets
```js
const clientID= ""
const clientSecret= ""
```

6. ` npm run dev` 跑起來, 瀏覽器打開 localhost:3002, Login with GitHub 連結點下去, 按確定驗證, 會來看 server 這邊, 會印出使用者資訊, 代表登入成功, 已經拿到使用者資訊了, 接下來就可以使用資訊, 去github做進一步的事情