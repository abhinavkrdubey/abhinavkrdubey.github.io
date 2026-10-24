---
title: "Building my local machine learning workstation"
description: "Windows, WSL Ubuntu and an AMD GPU: the setup I verified for PyTorch and TensorFlow."
category: "ENGINEERING NOTES"
section: blog
date: "2026-10-24"
tags: ["WSL", "ROCm", "PyTorch", "TensorFlow"]
---

I set up my Windows desktop for machine learning development using Ubuntu inside WSL2. The goal was to run Python projects from VS Code while keeping Linux tooling and GPU acceleration available.

## The hardware

- AMD Ryzen 7 7800X3D.
- 32 GB of system RAM.
- AMD Radeon RX 9070 XT with approximately 16 GB of GPU memory.
- A dedicated 2 TB KIOXIA EXCERIA PLUS G3 SSD for development storage.

## The software I tested

The environment uses Ubuntu 24.04 in WSL2, ROCm 7.2.4 and ROCDXG 1.2.0. My Python environment contains AMD builds of PyTorch 2.9.1 and TensorFlow 2.20.0.

These are the versions I tested on this machine, rather than a promise that every version combination works.

## Verification matters

Installing a framework is only the first step. I checked GPU detection, matrix multiplication and backpropagation separately in PyTorch and TensorFlow.

I then checked that VS Code notebooks selected the correct Python environment and detected the GPU.

## Moving development storage

After installing the second SSD, I moved the Ubuntu distribution to it using WSL's distribution move command. The Python environment kept its Linux path, so the notebook interpreter configuration continued to work.

## What this setup proves

The checks establish that basic GPU computation and automatic differentiation work on my machine. They do not establish compatibility with every model, custom kernel or training library.

My next step is to use the environment for reproducible experiments, with project-specific data, evaluation and documentation.
