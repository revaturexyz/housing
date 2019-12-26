# alpine :: aks_module

resource "azurerm_key_vault" "k8s" {
  location = var.key_vault["location"]
  name = var.key_vault["name"]
  resource_group_name = azurerm_resource_group.k8s.name
  tenant_id = var.key_vault["tenant_id"]

  tags = {
    environment = var.key_vault["environment"]
    owner = var.key_vault["owner"]
  }
}

resource "azurerm_kubernetes_cluster" "k8s" {
  dns_prefix = var.kubernetes_cluster["dns_prefix"]
  location = var.kubernetes_cluster["location"]
  name = var.kubernetes_cluster["name"]
  resource_group_name = azurerm_resource_group.k8s.name

  default_node_pool {
    name = var.kubernetes_cluster["pool_name"]
    vm_size = var.kubernetes_cluster["vm_size"]
    vnet_subnet_id = azurerm_subnet.k8s.id
  }

  service_principal {
    client_id = var.kubernetes_cluster["client_id"]
    client_secret = var.kubernetes_cluster["client_secret"]
  }

  tags = {
    environment = var.kubernetes_cluster["environment"]
    owner = var.kubernetes_cluster["owner"]
  }
}

resource "azurerm_resource_group" "k8s" {
  location = var.resource_group["location"]
  name = var.resource_group["name"]

  tags = {
    environment = var.resource_group["environment"]
    owner = var.resource_group["owner"]
  }
}

resource "azurerm_subnet" "k8s" {
  address_prefix = var.subnet["address"]
  name = var.subnet["name"]
  resource_group_name = azurerm_resource_group.k8s.name
  virtual_network_name = azurerm_virtual_network.k8s.name
}

resource "azurerm_virtual_network" "k8s" {
  address_space = var.virtual_network["address"]
  dns_servers = var.virtual_network["dns"]
  location = var.virtual_network["location"]
  name = var.virtual_network["name"]
  resource_group_name = azurerm_resource_group.k8s.name

  tags = {
    environment = var.virtual_network["environment"]
    owner = var.virtual_network["owner"]
  }
}
