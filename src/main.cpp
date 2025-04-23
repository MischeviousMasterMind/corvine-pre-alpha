#include "console.hpp"

#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#else
#define EMSCRIPTEN_KEEPALIVE
#endif

extern "C" {

    EMSCRIPTEN_KEEPALIVE void print(const char* message) {
        console_log(message);
    }
}