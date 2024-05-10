import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";
import { Plus } from "lucide-react";
import React from "react";
import { CreateBoardForm } from "./create-board-form";

export function CreateBoard({ projectId, className }: { projectId: string, className?: string }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className={cn("w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2", className)}>
      {isOpen ? (
        <div className={cn("p-2 border rounded-lg h-[104px] ")}>
          <CreateBoardForm projectId={projectId} />
        </div>
      ) : (
        <Button
          className={cn("p-2 rounded-lg h-[104px] w-full")}
          variant="outline"
          onClick={() => setIsOpen((val) => !val)}
        >
          <Plus />
          Создать
        </Button>
      )}
    </div>
  );
}
