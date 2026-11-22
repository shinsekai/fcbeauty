#!/bin/sh
# Runs at container start (nginx image executes /docker-entrypoint.d/*.sh).
# Writes runtime settings to runtime-config.js, which index.html loads before the app.
set -eu

CONFIG_FILE="${RUNTIME_CONFIG_FILE:-/usr/share/nginx/html/runtime-config.js}"
HASH="${METRICOOL_TRACKER_HASH:-}"

# The hash goes into JavaScript: accept letters and digits only.
case "$HASH" in
  *[!A-Za-z0-9]*)
    echo "runtime-config: METRICOOL_TRACKER_HASH ignored (unexpected characters)" >&2
    HASH=""
    ;;
esac

printf 'window.__ENV__ = { METRICOOL_TRACKER_HASH: "%s" };\n' "$HASH" > "$CONFIG_FILE"
