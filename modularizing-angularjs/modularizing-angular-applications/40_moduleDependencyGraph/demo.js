angular.module("RichEditor", []);

angular.module("Folder", []);

angular.module("Inbox", ["Folder"]);

angular.module("Compose", ["RichEditor"]);

angular.module("EmailApplication", ["Inbox", "Compose"]);
