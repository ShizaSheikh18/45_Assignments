function make_shirt(size, text) {
    if (size === void 0) { size = 'Large'; }
    if (text === void 0) { text = 'I love Typescript'; }
    console.log("Creating a ".concat(size, " shirt with message: ").concat(text));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'I love Pakistan');
