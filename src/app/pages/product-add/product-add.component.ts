import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ProductInfo} from "../../models/productInfo";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit, AfterContentChecked {

    product = new ProductInfo();

    constructor(private productService: ProductService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    productId: string;
    isEdit = false;

    ngOnInit() {
        // this.productId = this.route.snapshot.paramMap.get('id');
        // if (this.productId) {
        //     this.isEdit = true;
        //     this.productService.getDetail(this.productId).subscribe(prod => this.product = prod);
        // }

    }

    update() {
        this.productService.update(this.product).subscribe(prod => {
                if (!prod) throw new Error();
                this.router.navigate(['/seller']);
            },
            err => {
            });

    }

    onSubmit() {
       
            this.add();
    }

    add() {
        this.productService.create(this.product).subscribe(prod => {
                if (!prod) throw new Error;
                this.router.navigate(['/']);
            },
            e => {
            });
    }

    ngAfterContentChecked(): void {
        console.log(this.product);
    }
}
