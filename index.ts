import * as fileExists from 'file-exists'
import * as fileInfo from 'filenameinfo'
import * as fileGen from 'file-gen-series'

export interface IFileGenOptions {
  numberLenght?: number
}
export interface IFileGenSettings extends IFileGenOptions {
  numberLenght: number
}

export function genFileSequence(path: string, options?: IFileGenOptions): string {

  if (options) {

    if (!options.numberLenght) options.numberLenght = 5

  } else {
    const settings: IFileGenSettings = {
      numberLenght: 3
    }
    options = settings
  }


  if (!fileExists.sync(fileGen.nextPath(path, options.numberLenght))) {

    return fileGen.nextPath(path, options.numberLenght)

  } else {
    while (fileExists.sync(fileGen.nextPath(path, options.numberLenght))) {
      path = fileGen.nextPath(fileGen.nextPath(path, options.numberLenght))

      
    }
    return path

  }


}