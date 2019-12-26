# alpine :: makefile

## rule :: init
.PHONY: init
init:
	@echo '$@ :: sets editor to vscode'
	@git config --local core.editor 'code --wait'

.DEFAULT_GOAL:= init
