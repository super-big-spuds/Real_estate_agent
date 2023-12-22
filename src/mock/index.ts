import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import { MockMethod } from 'vite-plugin-mock'
import FileModule from './module/file'
import Coledit from './module/col'
const mockModules: MockMethod[] = [ ...FileModule, ...Coledit]

export default function setupProdMockServer() {
  createProdMockServer( [ ...mockModules])
}