#!/bin/sh

#  push.sh
#
#  Created by Hoan Tran on 8/4/18.
#  For liturgy project

usage() {
    printf "\n Usage: $0 SSH_USER HOST_URL
    \n"
}

if [ $# -ne 2 ]; then
    usage
    exit 1
fi

# build
# push
# - archive remote
# - delete remote archive
# - cp to remote

#
# SSH
#
SSH_USER="$1"
HOST_URL="$2"

#
# SCP/SSH
#
#SCP="scp -q -o User=$SSH_USER -o StrictHostKeyChecking=no"
SCP="scp -o User=$SSH_USER -o StrictHostKeyChecking=no"
SSH="ssh -l $SSH_USER -o StrictHostKeyChecking=no"

BUILD="npm run build"

REL_BIN_DIR=$(dirname "$0")
BIN_DIR=$( cd "$REL_BIN_DIR" ; pwd -P )
SITE_DIR="$BIN_DIR/.."
DIST_DIR="$SITE_DIR/dist/"

REMOTE_DIR="./html/vnhelp"
ARCHIVE_DIR="archive"
CONTENTS="index.html static"
HTACCESS="$SITE_DIR/htaccess"

COPY="scp -r -o User=$SSH_USER -o StrictHostKeyChecking=no $DIST_DIR/* $HOST_URL:$REMOTE_DIR"
COPY_HTACCESS="scp -r -o User=$SSH_USER -o StrictHostKeyChecking=no $HTACCESS $HOST_URL:$REMOTE_DIR/.htaccess"

build() {
    echo "Building dist ..."
    echo "......................"
    $BUILD | grep "Errors:" 1>/dev/null
    if [ $? -ne 1 ]; then
        printf "ERR: Encountered build error. Execute 'npm run build' to see errors. \n\n"
        exit 1
    fi
    return 0
}

push() {
    echo "Transfer to remote ..."
    echo "......................"
    $SSH $HOST_URL "cd $REMOTE_DIR; rm -rf $ARCHIVE_DIR 2>/dev/null; mkdir $ARCHIVE_DIR; cp -R $CONTENTS $ARCHIVE_DIR; rm -rf $CONTENTS"
    $COPY
    $COPY_HTACCESS
}


echo ""
cd $SITE_DIR
build && push && echo ".......\nDONE"











