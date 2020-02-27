import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'imageSize'
})
export class ImageSizePipe implements PipeTransform {

	transform(value: any, width: string = '100', height?: string ): any {
		return value.toString().replace('{width}', width).replace('{height}', height ? height : width);
	}

}
