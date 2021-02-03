#!/bin/bash

GRPC_TOOLS=$(exec npx grpc_tools_node_protoc)
INPUT_DIR="./src/protos"
INPUT_DIR_FILE="./src/protos/*.proto"
OUTPUT_DIR="./src/typedefs"
FIND_FILE=$(find ${OUTPUT_DIR} -name "*.js")
PROTOC_GEN_TS_PATH_WINDOWS="node_modules/.bin/protoc-gen-ts.cmd"

if [ "$PROTOC_GEN_TS_PATH_WINDOWS" ]
then
#remove all files
  $(rm ${OUTPUT_DIR}/*)
#generate config if file exist
  ${GRPC_TOOLS} \
	--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH_WINDOWS} \
	--grpc_out=grpc_js:${OUTPUT_DIR} \
	--js_out=import_style=commonjs,binary:${OUTPUT_DIR} \
	--ts_out=grpc_js:${OUTPUT_DIR} \
	--proto_path ${INPUT_DIR} ${INPUT_DIR_FILE}
else
#generate config if file not exist
  ${GRPC_TOOLS} \
	--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH_WINDOWS} \
	--grpc_out=grpc_js:${OUTPUT_DIR} \
	--js_out=import_style=commonjs,binary:${OUTPUT_DIR} \
	--ts_out=grpc_js:${OUTPUT_DIR} \
	--proto_path ${INPUT_DIR} ${INPUT_DIR_FILE}
fi