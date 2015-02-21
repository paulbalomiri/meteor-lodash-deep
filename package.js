Package.describe({
    name: "pba:lodash-deep",
    summary: "lodash deep meteor repackaging for client/server",
    environments: ['client'], 
    git:"git@github.com:paulbalomiri/meteor-lodash-deep.git",
    version: '0.0.0'
});

Package.on_use(function(api) {
var both, both_f, client, client_f, lodash_pkg_string, server, server_f;
client = 'client';
server = 'server';
both = [client, server];
both_f = ['lodash-symbol.js', 'lodash-deep/lodash-deep.js'];
client_f = [];
server_f = [];
lodash_pkg_string = 'alethes:lodash@0.7.1';
api.use([lodash_pkg_string], both);
api.imply(lodash_pkg_string, both);
api.add_files(both_f, both);
api.add_files(server_f, server);
return api.add_files(client_f, client);
});

