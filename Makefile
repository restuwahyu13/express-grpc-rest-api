NPM := npm
FLAG := run

###############################
## RUNNING DEV APP ENVIRONMENT
################################

dev:

ifdef type
	${NPM} ${FLAG} ${type}:dev
endif

###############################
## GITHUB AUTOMATION
################################

GIT := git

gh: add.o commit.o push.o

add.o:
	${GIT} add .

commit.o:

ifdef msg
	${GIT} commit -m ${msg}
endif

push.o:
	${GIT} push origin main


PROTO_DIR := ./proto
PROTO_GEN_GRPC := protoc-gen-grpc
PROTOC_GEN_GRPC_TS := protoc-gen-grpc-ts

###################################
## GENERATE PROTOFILE TO TS AND JS
##################################

protogen: cleanup.o generate.o

cleanup.o:
	rm ${PROTO_DIR}/*.{ts,js}

generate.o:
	# generate js codes
	${PROTO_GEN_GRPC} \
	--js_out=import_style=commonjs,binary:${PROTO_DIR} \
	--grpc_out=${PROTO_DIR} \
	--proto_path ${PROTO_DIR} \
	${PROTO_DIR}/*.proto

	# generate d.ts codes
	${PROTOC_GEN_GRPC_TS} \
	--ts_out=service=true:${PROTO_DIR} \
	--proto_path ${PROTO_DIR} \
	${PROTO_DIR}/*.proto