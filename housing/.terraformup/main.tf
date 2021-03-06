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
  version = "~>1.44.0"
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

resource "azurerm_resource_group" "aks" {
  location = var.aks_resource_group["location"]
  name = var.aks_resource_group["name"]
}
