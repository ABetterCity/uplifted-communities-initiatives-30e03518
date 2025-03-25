
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ApplicationStatusSelector } from "./ApplicationStatusSelector";
import { DeleteApplicationButton } from "./DeleteApplicationButton";
import { useIsMobile } from "@/hooks/use-mobile"; // Corrected import
import { CalendarClock, Mail, Phone, ClipboardCheck, Edit3 } from "lucide-react";

interface Application {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  signature: string;
  status: string | null;
}

interface ApplicationDetailsProps {
  application: Application | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationDetails({ application, isOpen, onClose }: ApplicationDetailsProps) {
  const isDesktop = !useIsMobile(); // Using the correct hook and negating for desktop
  
  if (!application) return null;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const detailsContent = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-2">
              <Edit3 className="h-4 w-4 text-muted-foreground mt-1" />
              <div>
                <p className="font-medium">{application.name}</p>
                <p className="text-sm text-muted-foreground">Full Name</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Mail className="h-4 w-4 text-muted-foreground mt-1" />
              <div>
                <p className="font-medium">{application.email}</p>
                <p className="text-sm text-muted-foreground">Email Address</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Phone className="h-4 w-4 text-muted-foreground mt-1" />
              <div>
                <p className="font-medium">{application.phone}</p>
                <p className="text-sm text-muted-foreground">Phone Number</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Application Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-2">
              <CalendarClock className="h-4 w-4 text-muted-foreground mt-1" />
              <div>
                <p className="font-medium">{formatDate(application.created_at)}</p>
                <p className="text-sm text-muted-foreground">Submission Date</p>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-1">Current Status</p>
              <ApplicationStatusSelector 
                id={application.id} 
                currentStatus={application.status} 
              />
            </div>
            
            <div className="pt-2">
              <DeleteApplicationButton id={application.id} onDelete={onClose} />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Reason for Volunteering</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-wrap bg-muted p-4 rounded-md text-sm">
            {application.reason}
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-start space-x-2">
              <ClipboardCheck className="h-4 w-4 text-muted-foreground mt-1" />
              <div>
                <p className="font-medium">{application.signature}</p>
                <p className="text-sm text-muted-foreground">Digital Signature</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <DialogDescription>
              Submitted by {application.name} on {new Date(application.created_at).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          {detailsContent}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle>Application Details</DrawerTitle>
          <DrawerDescription>
            Submitted by {application.name} on {new Date(application.created_at).toLocaleDateString()}
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          {detailsContent}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
