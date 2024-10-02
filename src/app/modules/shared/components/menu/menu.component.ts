import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { TreeModule } from "primeng/tree";
import { SharedService } from '../../../shared/service/shared.service';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
  imports: [FormsModule, CommonModule, TreeModule],
  standalone: true,
})
export class MenuComponent {
  files = [
    {
      key: "0",
      label: "Submissions",
      data: "Documents Folder",
      icon: "pi pi-fw pi-inbox",
      route: "/submissions/list"
    },
    {
      key: "2",
      label: "Consultants",
      data: "Movies Folder",
      icon: "pi pi-fw pi-star-fill",
      route: "/consultants/list"
    },
    {
      key: "3",
      label: "Recruiters",
      data: "Movies Folder",
      icon: "pi pi-fw pi-star-fill",
      route: "/recruiters/list"
    },
    {
      key: "4",
      label: "Vendors",
      data: "Movies Folder",
      icon: "pi pi-fw pi-star-fill",
      route: "/vendors/list"
    },
    {
      key: "5",
      label: "Email",
      data: "Movies Folder",
      icon: "pi pi-fw pi-star-fill",
      route: "/email/create"
    }
  ];
  menuOptions: any = [];
  userTypeBasedRules!: any;
  selectedFile!: any;

  constructor(public router: Router, public sharedSvc: SharedService) {}

  ngOnInit() {
    this.filterMenuByLoginUserPermissions();
  }

  filterMenuByLoginUserPermissions(){
    let loggedInUserPermission = this.sharedSvc.getLoggedInUserType();
    this.userTypeBasedRules = this.sharedSvc.getUserTypePermissions(loggedInUserPermission);
    this.updateThePermissions();
  }

  updateThePermissions() {
    // Update files with the correct visibility based on user permissions
    this.files = this.files.map((file: any) => {
      const roleKey = this.getLabels()[file.label]; // Get the corresponding role key
  
      // Check if userTypeBasedRules and roleKey exist and have the expected structure
      const rolePermissions = roleKey && this.userTypeBasedRules && this.userTypeBasedRules[roleKey];
  
      return {
        ...file,
        visibility: rolePermissions ? rolePermissions.visibility : true // Set visibility based on rules or default to true
      };
    });
  
    // Filter out files with visibility: false
    this.menuOptions = this.files.filter((file: any) => file.visibility !== false);
  
    console.log(this.menuOptions);
  }
  

  getLabels(): any {
    return {
      Submissions: 'submission',
      Consultants: 'consultant',
      Recruiters: 'recruiter',
      Vendors: 'vendor'
    };
  }

  onSelectMenu() {
    this.router.navigate([this.selectedFile.route]);
  }
}
