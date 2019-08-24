export default function config() {
    return {
        issuer: 'https://accounts.google.com',
        clientId: '344201864987-l73akb75regvougho5rrem74ge1td2i3.apps.googleusercontent.com',
        redirectUrl: 'com.stuhub:/oauth2/authorize',
        scopes: [ 'openid', 'email', 'profile' ]
    };
}
