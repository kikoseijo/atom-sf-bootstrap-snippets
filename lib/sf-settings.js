'use babel';

export default {

  config: {
    "sf-prefix": {
      "title": "Snippet default prefix / Prefijo para los shortcodes",
      "type": "string",
      "default": "boo",
      "description": "as default the prefix its **boo** but you can change it here."
    },


  },


  activate(state) {
    console.log("a:" + atom.config.get("bootstrap-3-snippets-for-atom.sf-prefix"));
    console.log("c:" + atom.config.get("bootstrap-3-snippets-for-atom.sf-prefix"));
  },

  deactivate() {

  },

  serialize() {
  },

  generate() {

  }
};
