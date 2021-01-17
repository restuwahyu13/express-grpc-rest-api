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