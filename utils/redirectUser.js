// utils/redirectUser.js
import Router from "next/router";

export function redirectUser(ctx, target) {
    if (ctx.res) {
        // Server-side redirect
        ctx.res.writeHead(303, { Location: target });
        ctx.res.end();
    } else {
        // Client-side redirect
        Router.push(target);
    }
}
export default redirectUser;