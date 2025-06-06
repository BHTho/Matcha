#########################################################
### VARIABLES
#########################################################

Off=\033[0m       # Text Reset
Blue=\033[0;34m         # Blue
Purple=\033[1;95m    # Bold Light Purple
Red=\033[1;31m        # Red
Green=\033[0;32m       # Green

#########################################################
### REGLES
#########################################################
.PHONY:		all init up down prune tests re cli cli-fclean status rm


all: 
	docker compose up --build

status:
	docker ps
	docker volume ls
	docker image ls
	docker image ls
	docker network ls

#regle re : wipe les volumes et reconstruit tout
re: down wipe-volumes all

build:
	@echo "🔧 Building the images..."
	@docker compose  -f compose.yml build
	@echo "🔨 Images built successfully!"

up:
	@ echo '🚀      starting the containers...'
	@docker compose  -f compose.yml up -d
	@echo "💻      https://localhost:$(PORT)"
	@echo '🌐      https://'$$(ifconfig | awk '/enp0s/{eth=1} /inet /{if (eth) {print $$2; exit;}}')':$(PORT)'
	

stop:
	@ echo '✋🏻     stopping the containers...'
	@docker compose  -f compose.yml stop

rm: down
	-docker stop $$(docker ps -qa) 2>/dev/null
	-docker rm $$(docker ps -qa) 2>/dev/null
	-docker rmi -f $$(docker images -qa) 2>/dev/null
	-docker volume rm $$(docker volume ls -q) 2>/dev/null
	-docker network rm $$(docker network ls -q) 2>/dev/null

down:
	@ echo '🚫   shutting down containers..'
	@docker compose -f compose.yml  down

#efface les container, les images, et  les caches
prune: down
	@echo "👨‍🌾 Let's prune all this mess"
	@docker container prune -f
	@docker image prune -fa
	@docker system prune -f

wipe-volumes: prune
	@./tools/wipe_volumes.sh
	@echo "🧹 Volumes wiped successfully!"