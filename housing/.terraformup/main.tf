# housing :: terraform

## BACKENDS
terraform {
  backend "remote" {}
}

## PROVIDERS
provider "azuread" {
  version = "~>0.4.0"
}

provider "azurerm" {
  version = "~>1.30.0"
}

provider "cloudflare" {
  version = "~>1.16.0"
}

## RESOURCES
resource "azurerm_app_service" "housingxyz" {
  app_service_plan_id = "${azurerm_app_service_plan.housingxyz.id}"
  https_only = "${var.app_service["https"]}"
  location = "${azurerm_resource_group.housingxyz.location}"
  name = "${var.app_service["name"]}"
  resource_group_name = "${azurerm_resource_group.housingxyz.name}"

  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
  }

  site_config {
    app_command_line = ""
    linux_fx_version = "COMPOSE|${filebase64(var.app_service["linux"])}"
  }
}

resource "azurerm_app_service_plan" "housingxyz" {
  kind = "${var.app_service_plan["kind"]}"
  location = "${azurerm_resource_group.housingxyz.location}"
  name = "${var.app_service_plan["name"]}"
  resource_group_name = "${azurerm_resource_group.housingxyz.name}"
  reserved = "${var.app_service_plan["reserved"]}"

  sku {
    size = "${var.app_service_plan["size"]}"
    tier = "${var.app_service_plan["tier"]}"
  }
}

resource "azurerm_resource_group" "housingxyz" {
  name = "${var.resource_group["name"]}"
  location = "${var.resource_group["location"]}"

  tags = {
    owner = "${var.resource_group["owner"]}"
  }
}

resource "azurerm_kubernetes_cluster" "aks" {
  dns_prefix = var.aks_kubernetes_cluster["dns"]
  location = azurerm_resource_group.aks.location
  name = var.aks_kubernetes_cluster["name"]
  resource_group_name = azurerm_resource_group.aks.name
  
  agent_pool_profile {
    name = "default"
    count = 1
    vm_size = "Standard_B2ms"
    os_type = "Linux"
  }

  service_principal {
    client_id = var.aks_service_principal["id"]
    client_secret = var.aks_service_principal["secret"]
  }
}

resource "azurerm_resource_group" "aks" {
  location = var.aks_resource_group["location"]
  name = var.aks_resource_group["name"]
}
