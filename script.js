"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var kick_js_1 = require("@retconned/kick-js");
var fs = require("fs");
var path = require("path");
console.log("Iniciando cliente...");
var username = "cossint";
var client = (0, kick_js_1.createClient)(username, { logger: true, readOnly: false });
// Inserta tus datos reales aquí
var bearerToken = "Bearer 206999977|VbXgqWBrat2I4UlDzNBnsPrzpio4GVbCpCfY0HGg";
var xsrfToken = "eyJpdiI6IkFXZ2JHaEZBYUlHWXdBS3F5MWJrQnc9PSIsInZhbHVlIjoiY0JESmtaZ2xrTkpCWjRSRUxiWUR2T2xNRFBHSXc2L1IzV3dGMHJSQzZHYVc4UGRYcGFCQXNmQnBpb1ZKTi9pYStWUXgrUUhCMUU0Qkl0cjNWemZxa1ZDNzlGWGc5bm1HNTNSbjlLa2ZYb1FMRTdYSmh2LzFXWEtMeFFZUDJ6V2YiLCJtYWMiOiI3N2JlMDAxZmYzNjZkNGViMWFjNjcwODZkNjJjMzAyMTY4ZDNlNzJlNzdiOTNkMmExOTVmZTA0MWNhMGY4MDY3IiwidGFnIjoiIn0%3D";
// ✅ Cookies corregidas (usa tu valor real de __cf_bm y XSRF-TOKEN si lo tienes)
var cookies = "__stripe_mid=e9f5a879-7759-4a29-958a-44b2592001d86cbcd5; _ga=GA1.1.603454228.1712156141; _tracking_consent=%7B%22reg%22%3A%22%22%2C%22con%22%3A%7B%22CMP%22%3A%7B%22a%22%3A%22%22%2C%22p%22%3A% 22%22%2C%22s%22%3A%22%22%2C%22m%22%3A%22%22%7D%7D%2C%22región%22%3A%22ECG%22%2C%22v%22%3A%222.1%22%7D; _shopify_y=5a678d0c-bdb8-450d-89d5-b4ceab47fc13; _tt_enable_cookie=1; _ttp=UtmtpMbwfsB0OIGn2xW0nTek_Lg; _uetvid=fbbb8bd00be611ef9747f115d055f167; _ga_N2TXGXM790=GS1.1.1715027216.1.1.1715027243.33.0.0; _ga_JPX1B65FL2=GS1.1.1715564928.44.1.1715565616.60.0.0; NEXT_LOCALE=es; _evga_b35f={%22uuid%22:%2254ac74d791b0fe70%22}; _sfid_79dc={%22anonymousId%22:%2254ac74d791b0fe70%22%2C%22consents%22:[]}; showMatureContent=true; tile_player_muted=true; USER_LOCALE=es; _gcl_au=1.1.1723143368.1739060888; intercom-id-per7qesc=48268fc2-c10d-4c89-b5e1-327daceb57b9; intercom-device-id-per7qesc=68f2332f-1830-4102-b554-a7d7021da988; stream_quality_cookie=480; _ga_D58073RJ6N=GS1.1.1743545075.2.0.1743545078.0.0.0; _ga_CM7GRBQN8L=GS1.1.1743545075.1.0.1743545078.0.0.0; volumen=0.75; KP_UIDz-ssn=0J1CALbq6Q6Ir96BkEio1zUOP2cEROl3jWH5Pr4acuTeE0QI0NQWx4NiEADmkn4OjbxwrCQ0mXn7KvG5dPVcVMInHWQiXxp01cGVsftXMaTr2B2q0FAk7H5MHEpTC71xTs5TRrW3oMB9ZzA5R6szsZCMkmsivHymRlC3otj8AcnY; token_de_sesión=206999977%7CVbXgqWBrat2I4UlDzNBnsPrzpio4GVbCpCfY0HGg; _ga_46FFCLPHYQ=GS1.1.1744189075.4.1.1744189137.0.0.0; _cfuvid=X98uRWYXWuFXQRBVfVl3ZvcbRFHqtZiVbO_zCuNNKYI-1744224271273-0.0.1.1-604800000; cf_clearance=6EjKZcrFKgiF4xnETDH9SxY2.DZ4_rXVj6LQnKuLPXY-1744224271-1.2.1.1-JoEtWFHhHQwKjzADXoi4nZcEVdzgjHQohxBi3lFaHbnTm2A2ih1XK4OzmTT7N3SgLYSPMrFQ7PHIZ3.gGCBvcpbQqawYPy944CJsEMmK9Vh1Hce6UKr3XDunSK7Jy.q6eo 1. El código de error es 0.05.TTgY8FRAgwdFO5OHO5GYEUNDgo; __stripe_sid=f7c93c3e-6a29-4938-96e4-8aacc0ef53a1b31cd7; XSRF-TOKEN=eyJpdiI6IkFXZ2JHaEZBYUlHWXdBS3F5MWJrQnc9PSIsInZhbHVlIjoiY0JESmtaZ2xrTkpCWjRSR UxiWUR2T2xNRFBHSXc2L1IzV3dGMHJSQzZHYVc4UGRYcGFCQXNmQnBpb1ZKTi9pYStWUXgrUUhCMUU0Qkl0cjNWem Zxa1ZDNzlGWGc5bm1HNTNSbjlLa2ZYb1FMRTdYSmh2LzFXWEtMeFFZUDJ6V2YiLCJtYWMiOiI3N2JlMDAxZmYzNj ZkNGViMWFjNjcwODZkNjJjMzAyMTY4ZDNlNzJlNzdiOTNkMmExOTVmZTA0MWNhMGY4MDY3IiwidGFnIjoiIn0%3D; sesión de inicio=eyJpdiI6Im5pVU5qVzNEamlMUkQ4Zy9WN2J2WlE9PSIsInZhbHVlIjoiOWE0eGZHN0VWNS9WZGorOHI3dTA5QVltMGh3SDYwTzlRVTJkN1loS3ByMXlQOVVZZlY1dUJLWkV2NkdJeHhzQUV6b0RPVzVwVGUwS2p2ZVlZV zF2WlVxS0RyTFdWTFZqQmdxWjFjbUVUVC8zWEJ5V0N0K29BM3dvS0NrdjJMWHEiLCJtYWMiOiJiYThiMTNhMzM4ND QxNzk0MTdjYWYwZTAwZjc3ODhhZDk2MGRjZjQ3MmIzNWViOTI0NWIwZDJkNDQwYjhlY2Q4IiwidGFnIjoiIn0%3D; z2rPJLRAHxI6GP2Shdx1NAXUlgf2jAY22pBuMABO=%3D%3D; __cf_bm=k_NmB3hHN4MCcKQD8q2z0Nxmypi5vAQE71GUs9T9L3Y-1744225464-1.0.1.1-vCftOi9lT73rWjeoVI Hd2Pshf6rd_DcU8XppOnToxB7ESJZ49iCip2cFzp4G48XIGL_zs32U40bZYXU_m3O1T8f2JSTsMDxz5N9C8MW2z_I; _ga_YS2DLSGQ53=GS1.1.1744224272.29.1.1744225466.58.0.1987877239; _dd_s=logs=1&id=2a4cf55b-7677-460c-b95d-036330d12ebb&created=1744224272671&expire=1744226369748&rum=01987877239; _dd_s=logs=1&id=2a4cf55b-7677-460c-b95d-036330d12ebb&created=1744224272671&expire=1744226369748&rum=01987877239; _dd_s=logs=1&id=2a4cf55b-7677-460c-b95d-036330d12ebb&created=1744224272671&expire=1744226369748&rum=0";
var PREFIX = "&";
var comandos = new Map();
client.comandos = comandos; // Para que los comandos puedan acceder al mapa si lo necesitan
// Función para cargar comandos dinámicamente
function cargarComandos() {
    return __awaiter(this, void 0, void 0, function () {
        var comandosPath, archivos, _i, archivos_1, archivo, ruta, comando;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    comandos.clear();
                    comandosPath = path.join(__dirname, "comandos");
                    archivos = fs.readdirSync(comandosPath).filter(function (file) { return file.endsWith(".ts") || file.endsWith(".js"); });
                    _i = 0, archivos_1 = archivos;
                    _a.label = 1;
                case 1:
                    if (!(_i < archivos_1.length)) return [3 /*break*/, 4];
                    archivo = archivos_1[_i];
                    ruta = path.join(comandosPath, archivo);
                    delete require.cache[require.resolve(ruta)];
                    return [4 /*yield*/, Promise.resolve("".concat(ruta)).then(function (s) { return require(s); })];
                case 2:
                    comando = _a.sent();
                    if (comando.name && comando.execute) {
                        comandos.set(comando.name, comando);
                        console.log("\u2705 Comando cargado: ".concat(comando.name));
                    }
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
client.login({
    type: "tokens",
    credentials: {
        bearerToken: bearerToken,
        cookies: cookies,
        xsrfToken: xsrfToken,
    },
}).then(function () {
    console.log("✅ Login exitoso.");
}).catch(function (err) {
    console.error("❌ Error en login:", err);
});
client.on("ready", function () { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, cargarComandos()];
            case 1:
                _c.sent();
                console.log((_a = client.user) === null || _a === void 0 ? void 0 : _a.username);
                console.log("\u2705 Bot listo y conectado como ".concat((_b = client.user) === null || _b === void 0 ? void 0 : _b.tag));
                _c.label = 2;
            case 2:
                _c.trys.push([2, 4, , 5]);
                return [4 /*yield*/, client.sendMessage("cannyWave ¡Bot conectado y listo!")];
            case 3:
                _c.sent();
                return [3 /*break*/, 5];
            case 4:
                err_1 = _c.sent();
                console.error("❌ Error enviando mensaje de inicio:", err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
client.on("ChatMessage", function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var rawMessage, args, command, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (message.sender.id == "60036324")
                    return [2 /*return*/];
                console.log("Mensaje recibido en el canal: ".concat(message.sender.id, " ").concat(message.sender.username, ": ").concat(message.content));
                rawMessage = message.content.trim();
                if (!rawMessage.startsWith(PREFIX))
                    return [2 /*return*/];
                args = rawMessage.slice(PREFIX.length).trim().split(/\s+/);
                command = args[0].toLowerCase();
                if (!comandos.has(command)) return [3 /*break*/, 5];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 5]);
                return [4 /*yield*/, comandos.get(command).execute(client, message, args)];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_2 = _a.sent();
                console.error("\u274C Error ejecutando comando ".concat(command, ":"), err_2);
                return [4 /*yield*/, client.sendMessage("\u274C Ocurri\u00F3 un error con el comando \"".concat(command, "\""))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
