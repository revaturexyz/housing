# alpine :: terraform

module "aks" {
  key_vault = var.key_vault
  kubernetes_cluster = var.kubernetes_cluster
  resource_group = var.resource_group
  subnet = var.subnet
  virtual_network = var.virtual_network

  source = "./modules/aks"
}

module "provider" {
  source = "./modules/provider"
}

terraform {
  backend "remote" {}
  required_version = "~> 0.12.0"
}
