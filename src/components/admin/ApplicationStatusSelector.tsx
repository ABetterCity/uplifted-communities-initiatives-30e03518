
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ApplicationStatusSelectorProps {
  id: string;
  currentStatus: string | null;
  onClick?: (e: React.MouseEvent) => void;
}

export function ApplicationStatusSelector({ id, currentStatus, onClick }: ApplicationStatusSelectorProps) {
  const [status, setStatus] = useState(currentStatus || "pending");
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const statusOptions = [
    { value: "pending", label: "⏳ Pending" },
    { value: "approved", label: "✅ Approved" },
    { value: "rejected", label: "❌ Rejected" },
    { value: "waitlist", label: "⏱️ Waitlist" },
  ];

  const updateStatus = useMutation({
    mutationFn: async (newStatus: string) => {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', id);
        
      if (error) throw error;
      return newStatus;
    },
    onSuccess: (newStatus) => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
      toast({
        title: "Status updated",
        description: `Application status changed to ${newStatus}`,
      });
    },
    onError: (error: any) => {
      setStatus(currentStatus || "pending"); // Revert to previous status
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    updateStatus.mutate(newStatus);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "text-green-600 bg-green-50 border-green-200";
      case "rejected":
        return "text-red-600 bg-red-50 border-red-200";
      case "waitlist":
        return "text-amber-600 bg-amber-50 border-amber-200";
      default:
        return "text-blue-600 bg-blue-50 border-blue-200";
    }
  };

  return (
    <Select value={status} onValueChange={handleStatusChange}>
      <SelectTrigger
        className={`w-full max-w-[180px] h-8 text-sm border ${getStatusColor(status)}`}
        onClick={onClick}
      >
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent>
        {statusOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
