import { Module } from "@medusajs/utils"
import B2BModuleService from "./service"

export const B2B_MODULE = "b2bModuleService"

export default Module(B2B_MODULE, {
  service: B2BModuleService,
})
