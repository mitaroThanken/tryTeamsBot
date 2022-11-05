ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}

RUN curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
    sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \
    echo "deb https://ngrok-agent.s3.amazonaws.com $(lsb_release -c -s) main" | \
    sudo tee /etc/apt/sources.list.d/ngrok.list && \
    sudo apt update && sudo apt install ngrok
