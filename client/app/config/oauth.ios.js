export default function config() {
    return {
        issuer: 'https://accounts.google.com',
        clientId: '344201864987-sdt6gn873f9na1eih2ajgv4289f94d4r.apps.googleusercontent.com',
        redirectUrl: 'com.stuhub:/oauth2/authorize',
        scopes: [ 'openid', 'email', 'profile' ]
    };
}
