# planner


### Scripts:

```json

{"serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "server": "pm2 start index.js && pm2 monit",
    "server:start": "pm2 start index.js",
    "server:restart": "pm2 restart all",
    "server:stop": "pm2 stop all",
    "server:monitor": "pm2 monit"
}
```