# alpine :: aks_module_variables

variable "key_vault" {
  type = map(string)
}

variable "kubernetes_cluster" {
  type = map(string)
}

variable "resource_group" {
  type = map(string)
}

variable "subnet" {
  type = map(string)
}

variable "virtual_network" {
  type = object({
    address = string
    dns = list(string)
    environment = string
    location = string
    name = string
    owner = string
  })
}
