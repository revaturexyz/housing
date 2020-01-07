# housingxyz :: terraform-variables

## VARIABLES
variable "app_service" {
  type = "map"
}

variable "app_service_custom" {
  type = "map"
}

variable "app_service_plan" {
  type = "map"
}

variable "cloudflare_record" {
  type = "map"
}

variable "resource_group" {
  type = "map"
}

variable "aks_kubernetes_cluster" {
  type = "map"
}

variable "aks_resource_group" {
  type = "map"
}

variable "aks_service_principal" {
  type = "map"
}
